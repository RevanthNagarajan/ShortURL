import React, { useState, useEffect  } from 'react';
import './App.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { URL } from './Models/createForm';
import { encoder } from './Utils/encoder';

function App() {

  const [urlList,setUrlList] = useState([]);
  const getParams = { headers : { "accepts":"application/json" }, method : "GET"  };
  const [createForm,updateForm] = useState(new URL());


  const fetchData = async () => {
    fetch("/api/getURL",getParams)
    .then(res => res.json())
    .then((data) => setUrlList(data));
  }

  const postUrl =  async(body) => {
    await fetch("/api/createURL",{ headers : { "accepts":"application/json", "Content-Type": "application/json" }, method : "POST", body : JSON.stringify(body)  })
    .then(res => res.json())
    .then(() => fetchData().then(()=> updateForm(new URL())));
  }

  useEffect(() => {
    fetchData()
  }, []);

  useEffect(()=>{console.log(urlList)},[urlList])

  const changeInputs = (field,e) => {
    let newForm = new URL(createForm.title,createForm.description,createForm.url);
    if(field === 'title') {
      newForm.setTitle(e.target.value)
    } else if(field === 'url') {
      newForm.setUrl(e.target.value)
    } else {
      newForm.setDescription(e.target.value)
    }
    updateForm(newForm);
  }

  const submitUrl = () => {
    postUrl(
      {
          createdBy   : "firstUser@shorturl.com",
          shortUrl    : encoder(createForm.url),
          url         : createForm.url,
          title       : createForm.title,
          description : createForm.description,
      }
    )
  };

  return (
    <div className="App">
      <div className="AppTitle"> SHORT URL 
      <div className="User">
        <img src="https://img.icons8.com/material-outlined/24/000000/user--v1.png"/>
        <div className="UserDrop">First User</div>
      </div>
      </div>
      {urlList.length ? <div className="Container">
        <div className="Count">{urlList.length} items found
          <div className="CreateURL">
            <Popup trigger={<button> Create </button>} position="left center">
              <div className="PopupForm">
                <div>
                  <div className="FormElement">
                    <div className="FormTitle">Title</div>
                    <input type="text" value={createForm.title} name="title" onChange={(e) => { changeInputs('title',e) }}></input>
                    <div>{createForm.titleValidation}</div>
                  </div>
                  <div className="FormElement">
                    <div className="FormTitle">Description</div>
                    <input type="text" value={createForm.description} name="description" onChange={(e) =>  changeInputs('desc',e) }></input>
                  </div>
                  <div className="FormElement">
                    <div className="FormTitle">URL</div>
                    <input type="text" value={createForm.url} name="url" onChange={(e) =>  changeInputs('url',e) }></input>
                    <div>{createForm.urlValidation}</div>
                  </div>
                  <button type="submit" className="CreateUrlButton" onClick={submitUrl}> Submit </button>
                </div>
              </div>
            </Popup>
          </div>
        </div>
        <div className="UrlList">
          {
            urlList.map(url => 
              <div className="UrlListItems">
                <span className="UrlData">{url.title}</span>
                <span className="UrlData">{url.url}</span>
                <span className="UrlData"><a href={"http://localhost:3030/rd/"+url.shortUrl} target="_blank">http://localhost:3030/rd/{url.shortUrl}&nbsp;</a>
                  <img className="Clipboard" src="https://img.icons8.com/material-rounded/24/000000/copy.png" onClick={() => {navigator.clipboard.writeText(`http://localhost:3030/rd/${url.shortUrl}`)}}/>
                </span>
                <span className="UrlData">{url.createdBy}</span>
              </div>
            )
          }
        </div>
      </div>
      : null }
    </div>
  );
}

export default App;