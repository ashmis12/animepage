var pageNumber: any = 1;

export const getPageNumber = () => {
    return pageNumber;
  };
  
  export const setPageNumber = (number: any) => {
    pageNumber = number + 1;
  };