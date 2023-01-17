const postReducer=(
    state={posts:[],loading:false,error:false,uploading:false},
    action)=>{
    switch(action.type){
            case "UPLOAD_START":
                return {...state,uploading:true,error:false}
            case "UPLOAD_SUCCESS":
                localStorage.setItem("posts",JSON.stringify({...action?.data}));
                return {...state,posts: [action.data,...state.posts],uploading:false,error:false}
            case "UPLOAD_FAIL":
                return {...state,uploading:false,error:true}
            case "RETREVING_START":
                return {...state,loading:true,error:false}
            case "RETREVING_SUCCESS":
                return {...state,posts:[action.data,...state.posts],loading:false,error:false}
            case "RETREVING_FAIL":
                return {...state,loading:false,error:true}           
            default:
                return state
        }
}

export default postReducer