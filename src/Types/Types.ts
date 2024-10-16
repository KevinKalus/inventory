
export type ContentfulCards = {
  cards:{
    setId: string,
    setname: string,
    imgs: [ [Object], [Object], [Object], [Object] ]
  }[]
}


export type ImageFields = {
  fields: {title: string, file:{fileName:string,  url: string}
}
}
export type Sets = {
  setId: string;
  setName: string;
  imgs: ImageFields[]
}

export type Collection = {
   amount: number;
   name: string;
   imgSrc: string
}