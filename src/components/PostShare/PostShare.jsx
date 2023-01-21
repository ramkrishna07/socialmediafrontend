import React, { useState, useRef } from "react";
import "./PostShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage, uploadPost } from "../../actions/uploadAction";
import imageCompression from "browser-image-compression";

const PostShare = () => {
  const loading = useSelector((state) => state.postReducer.uploading);
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const dispatch = useDispatch();
  const desc = useRef();
  const location=useRef();
  const { user } = useSelector((state) => state.authReducer.authData);
  const serverPublic=process.env.REACT_APP_PUBLIC_FOLDER
  const onImageChange = async (event) => {
      if (event.target.files && event.target.files[0]) {
        const imageFile = event.target.files[0];
        // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
        // console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);

        const options = {
          maxSizeMB: .5,
          // maxWidthOrHeight: 1920,
          useWebWorker: true
        }
        try {
          const img = await imageCompression(imageFile, options);
          // console.log('img instanceof Blob', img instanceof Blob); // true
          // console.log(`img size ${img.size / 1024 / 1024} MB`); 
          setImage(img);
        } catch (error) {
          console.log(error);
        }
       
      }

    
  };

  // reseting the image and caption after share
  const reset = () => {
    setImage(null);
    desc.current.value = "";
    location.current.value="";
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
      location:location.current.value,
    };
    if (image) {
      const data = new FormData();
      const filename = Date.now() + image.name;
      data.append("name", filename);
      data.append("file", image);
      newPost.image = filename;
      console.log(newPost);
      try {
        dispatch(uploadImage(data));
      } catch (error) {
        console.log(error);
      }
    }
    dispatch(uploadPost(newPost));
    reset();
  };
  return (
    <div className="PostShare">
      <img src={user.profilePicture? serverPublic + user.profilePicture : serverPublic + "defaultProfile.png"} alt="" />
      <div>
        <input ref={desc} required type="text" placeholder="What's happening" />
        <div className="postOptions">
          <div
            className="Option"
            
            onClick={() => imageRef.current.click()}
          >
            <UilScenery style={{ color: "var(--photo)" }}/>
            Photo
          </div>
          <div className="Option"  onClick={() => imageRef.current.click()}>
            <UilPlayCircle style={{ color: "var(--video)" }}/>
            Video
          </div>
          
          <div className="Option" >
            <UilLocationPoint style={{ color: "var(--location)" }}/>
            <input type="text" placeholder="location" ref={location}/>
          </div>
          <div className="Option" >
            <UilSchedule style={{ color: "var(--shedule)" }}/>
            Shedule
          </div>
          
          <button
            className="button ps-button"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Uploading..." : "Share"}
          </button>
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
          </div>
        </div>

        {image && (
          <div className="previewImage">
            <UilTimes onClick={() => setImage(null)} />
            <img src={URL.createObjectURL(image)} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
