// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
// import "./App.css"
import { useEffect, useEffectEvent, useRef, useState } from 'react';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
export default function App() {
  let [data, setData] = useState([])
  let [inputdata, setinputdata] = useState({
    name: "", price: "", category: "", stock: "", review: "", rating: "", discount: ""
  })
  let [updateinputdata, setUpdateinputdata] = useState({
    name: "", price: "", category: "", stock: "", review: "", rating: "", discount: "", updateproduct_id: null
  })
  let closebtn = useRef()
  let [images, setImages] = useState([])
  let getdata = () => {
    fetch("https://edu-wnys.onrender.com/api/product/get-products")
      .then((res) => { return res.json() })
      .then((result) => {
        setData(result.data)
      })
  }
  useEffect(() => {
    getdata()
  }, [])
 
  let deleteHandler = (id) => {
    if (confirm("are you sure u want to delete this ")) {
      fetch("https://edu-wnys.onrender.com/api/product/delete-product/" + id, {
        method: "DELETE"
      })
        .then((res) => { return res.json() })
        .then((result) => {
          console.log(result)
          setData(result.data)
          if (result.success) {
            toast.success(result.message, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
            });
            getdata()
          }
        }).catch((err) => {
          console.log(err)
          toast.error(err.response.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        })
    }
  }
  let submithandler = async (e) => {
    e.preventDefault();
    let formdata = new FormData();;
    for (let i in inputdata) {
      formdata.append(i, inputdata[i])
    }
    images.forEach((file) => formdata.append("images", file));
    await fetch("https://edu-wnys.onrender.com/api/product/createproduct", {
      method: "POST",
      body: formdata,
    }).then((res) => { return res.json() })
      .then((result) => {
        getdata()
        toast.success(result.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }).catch((err) => {
        toast.error(err.response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      });
  }
 
  let inputhandler = (e) => {
    e.preventDefault();
    setinputdata({ ...inputdata, [e.target.name]: e.target.value });
  }
  let updateinputhandler = (e) => {
    e.preventDefault();
    setUpdateinputdata({ ...updateinputdata, [e.target.name]: e.target.value });
  }
  let updatehandler = (data) => {
    setUpdateinputdata({ ...updateinputdata, name: data.name, price: data.price, discount: data.discount, rating: data.rating, stock: data.stock, category: data.category, review: data.review, updateproduct_id: data._id })
  }
  let Updatefunction = (e) => {
    e.preventDefault();
    if (updateinputdata.updateproduct_id) {
      fetch("https://edu-wnys.onrender.com/api/product/update-product/" + updateinputdata.updateproduct_id, {
        method: "PUT",
        body: JSON.stringify({ ...updateinputdata }),
        headers: {
          "Content-Type": "application/json"
        }
      }).then((res) => { return res.json() })
        .then((result) => {
          getdata();
          closebtn.current.click();
          toast.success(result.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }).catch((err) => {
          toast.error(err.response.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        });
    }
  }
 
  return (
    <div className='p-5'>
      <ToastContainer position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce} />
      <button onClick={getdata}>get data</button>
      <div className="p-5 w-50 mx-auto my-4 border bg-info">
        <form onSubmit={submithandler}>
          <div className="mb-3">
            <label htmlFor="n" className="form-label">Name</label>
            <input type="text" className="form-control" name='name' onChange={inputhandler} />
          </div>
          <div className="mb-3">
            <label htmlFor="n" className="form-label">price</label>
            <input type="text" className="form-control" name='price' onChange={inputhandler} />
          </div>
          <div className="mb-3">
            <label htmlFor="n" className="form-label">category</label>
            <input type="text" className="form-control" name='category' onChange={inputhandler} />
          </div>
          <div className="mb-3">
            <label htmlFor="n" className="form-label">stock</label>
            <input type="text" className="form-control" name='stock' onChange={inputhandler} />
          </div>
          <div className="mb-3">
            <label htmlFor="n" className="form-label">rating</label>
            <input type="text" className="form-control" name='rating' onChange={inputhandler} />
          </div>
          <div className="mb-3">
            <label htmlFor="n" className="form-label">review</label>
            <input type="text" className="form-control" name='review' onChange={inputhandler} />
          </div>
          <div className="mb-3">
            <label htmlFor="n" className="form-label">discount</label>
            <input type="text" className="form-control" name='discount' onChange={inputhandler} />
          </div>
          <div className="mb-3">
            <label htmlFor="n" className="form-label">images</label>
            <input type="file" className="form-control" multiple onChange={(e) => { setImages([...e.target.files]) }} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
      <div className="d-flex gap-4 flex-wrap border justify-content-evenly p-4 w-100 h-100">
        {data?.length && data.map((v, i) => {
          return <div key={v._id} className=' flex-grow p-2 w-fit h-fit border'>
            <img width="100px" height="100px" style={{ objectFit: "contain" }} src={v.images[0].url.replace("http://localhost:4000", "https://edu-wnys.onrender.com")} alt="" />
            <p>{v.name}</p>
            <p>{v.price}</p>
            <p>{v.review}</p>
            <button className='btn btn-danger' onClick={() => { deleteHandler(v._id) }}>delete  </button>
            <button className='btn btn-info' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => { updatehandler(v) }}>update  </button>
          </div>
        })}
      </div>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={Updatefunction}>
                <div className="mb-3">
                  <label htmlFor="n" className="form-label">Name</label>
                  <input type="text" className="form-control" name='name' value={updateinputdata.name} onChange={updateinputhandler} />
                </div>
                <div className="mb-3">
                  <label htmlFor="n" className="form-label">price</label>
                  <input type="text" className="form-control" name='price' value={updateinputdata.price} onChange={updateinputhandler} />
                </div>
                <div className="mb-3">
                  <label htmlFor="n" className="form-label">category</label>
                  <input type="text" className="form-control" name='category' value={updateinputdata.category} onChange={updateinputhandler} />
                </div>
                <div className="mb-3">
                  <label htmlFor="n" className="form-label">stock</label>
                  <input type="text" className="form-control" name='stock' value={updateinputdata.stock} onChange={updateinputhandler} />
                </div>
                <div className="mb-3">
                  <label htmlFor="n" className="form-label">rating</label>
                  <input type="text" className="form-control" name='rating' value={updateinputdata.rating} onChange={updateinputhandler} />
                </div>
                <div className="mb-3">
                  <label htmlFor="n" className="form-label">review</label>
                  <input type="text" className="form-control" name='review' value={updateinputdata.review} onChange={updateinputhandler} />
                </div>
                <div className="mb-3">
                  <label htmlFor="n" className="form-label">discount</label>
                  <input type="text" className="form-control" name='discount' value={updateinputdata.discount} onChange={updateinputhandler} />
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" ref={closebtn} data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}