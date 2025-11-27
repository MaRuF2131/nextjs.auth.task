  const Fetch = async (path,method,body,massege) => {
    try {
      const res = await fetch(path,{ 
        method: method || "GET",
        body: body ? JSON.stringify(body) : undefined,
        headers: { "Content-Type":"application/json" }
    });
      const data = await res.json();   
      return{
        success:true,
        data,
        errorMsg:""
      }
    } catch (err) {
        return{
          success:false,
          data:null,
          errorMsg:massege || "Failed"
        }
    }
  };
  export default Fetch;
