const AddTask = () => {
    return (
      <form className= 'add-taks'>
           <div className='form-control'>
              <input style={{border:'none'}} type='task' placeholder='Subject'></input>
          </div>
          <div className='form-control'>
              <input style={{border:'none'}} type='task' placeholder='Assignment'></input>
          </div>
          <div className='form-control'>
              <input style={{border:'none'}} type='task' placeholder='Descirption of Assignment'></input>
          </div>
        
      </form>
    )
  }
  
  export default AddTask