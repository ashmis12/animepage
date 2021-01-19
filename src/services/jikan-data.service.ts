import { JIKAN_BASE_URL } from "../constants/general";
import { makeServerGet } from "./api.service";

export async function fetchSearchKeywordRelatedData(
    baseUrl: string,
    keyword: string,
    pageNumber: any
  ) {
    let response: any;
    const headers: any = {
      "Access-Control-Allow-Origin": "*",
      // "Access-Control-Allow-Credentials": "true",
      "Content-Type": "application/json"
    }
    
    let requestUrl: string = `${JIKAN_BASE_URL}+${encodeURIComponent(keyword)}&limit=10&page=${pageNumber}`;
    console.log(requestUrl)
    alert("request url: "+requestUrl)
    response = await makeServerGet(baseUrl, headers, {})
      .then((apiResponse: any) => {
        if (apiResponse !== false) {
          return apiResponse;
        }
        return false;
      })
      .catch((err: any) => {
        console.log(err);
        return false;
      });
    return response;
  }
