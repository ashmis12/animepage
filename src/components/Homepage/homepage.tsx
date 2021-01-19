import React, { useContext, useEffect, useState } from 'react';
import { fetchSearchKeywordRelatedData } from '../../services/jikan-data.service';
import AppContext from '../../store/AppContext';
import JIKAN_DATA_ACTION from '../../store/jikandata/action';
import { Button, ImageList, ImageListItem, ImageListItemBar } from '@material-ui/core';
import Loader from '../common/Loading';
import { getPageNumber, setPageNumber } from '../../Globals';


export default function Homepage() {
  const { state ,dispatch } = useContext(AppContext);
  var [inputText, setInputText] = useState('');
  var [loader, showLoader] = useState(false);


  useEffect(() => {
    <Loader />
  }, [state.jikanState.jikanObjects]
  );

  const BarStyling = {width:"29rem",background:"#F2F1F9", border:"none", padding:"0.6rem"};
  const onKeyPressInputTextHandler = (e: any) => {
    if (
      e.key === 'Enter' &&
      e.shiftKey === false &&
      inputText.trim().length > 0 &&
      inputText.trim() !== ''
    ) {
      handleSearchButton(e);
    }
  };

  const handleLoadMore = async() => {
    showLoader(true);
    const pageNumber: any = getPageNumber();
    await fetchSearchKeywordRelatedData("https://testapi.io/api/ashmis12/naruto/search/page=2" ,inputText, pageNumber)
    .then((result: any) => {
      showLoader(true);
      if(result !== false && result.results){
        result.results.map((element: any) => {
          state.jikanState.jikanObjects[element['mal_id']] = element
        })
        setPageNumber(pageNumber);
        dispatch({
          type: JIKAN_DATA_ACTION.type,
          action: JIKAN_DATA_ACTION.action.UPDATE_JIKAN_DATA,
          data: state.jikanState.jikanObjects
        });
        showLoader(false);
      }
  })
}
  const handleSearchButton = async(event: any) => {
    alert(`INPUT TEXT :=` + inputText)
    inputText = inputText.trim()
    setInputText(inputText.trim())
    showLoader(true);
    const pageNumber: any = getPageNumber();
    await fetchSearchKeywordRelatedData("https://testapi.io/api/ashmis12/naruto/search/page=1", inputText, pageNumber)
    .then((result: any) => {
      showLoader(true);
      if(result !== false && result.results){
        setPageNumber(pageNumber);
        dispatch({
          type: JIKAN_DATA_ACTION.type,
          action: JIKAN_DATA_ACTION.action.UPDATE_JIKAN_DATA,
          data: result.results
        });
        showLoader(false);
      }
    })
  }
  return (
    (
      <div>
      <div className="App">
      <header>
        <h1>Search for an anime</h1>
      </header>
      <div className="heading">
      <div className="search_box">
            <input
            autoFocus
            style={BarStyling}
              placeholder=""
              value={inputText}
              onChange={(e: any) => setInputText(e.target.value)}
              onKeyPress={onKeyPressInputTextHandler}
            />
            <Button
              // disabled={inputText.trim().charAt(0) !== ''}
              variant="contained"
              color="primary" 
              onClick={(e: any) => {
                handleSearchButton(e);
              }}>
            GO
            </Button>
          </div>
      {loader === true && <Loader />}
      {state.jikanState.jikanObjects.length > 0 && 
          <div id="imageList" className="image-widget">
          <ImageList cols={3} gap={240}>
            {state.jikanState.jikanObjects.map((item: any) => (
              <ImageListItem key={item.mal_id}>
                <img
                  style={{ width: 315}}
                  srcSet={item.image_url}
                  alt={item.title}
                  width={"20%"}
                  height={"20%"}
                />
                <ImageListItemBar
                  position="bottom"
                  title={item.title}
                  // subtitle={<span>by: {item.author}</span>}
                />
              </ImageListItem>
            ))}
          </ImageList>
          <div className="load-more">
              <Button
              color="primary" 
              onClick={() => {
                handleLoadMore();
              }}
              >
            LOAD MORE
            </Button>
          </div>
          </div>
        }
      </div>
      </div>
      </div>
    )
  );
}
