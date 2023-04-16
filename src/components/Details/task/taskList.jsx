import imagePink from "../../../assets/images/🖼️ Card-ImagePinkCardImage.png";
import imageButter from "../../../assets/images/🖼️ Card-ImageHighFideilityImage.png";
import imageGreen from "../../../assets/images/🖼️ Card-ImageGreenCardImage.png";
const IMAGES = [
  "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1524638431109-93d95c968f03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
];


export const TASKS = [

  {
    id: 0,
    title: "To Do",
    number: "3",
    cardTitleProgress: [
      {
        id: 0,
        headTitle: "Highfidelity Design",
        body: "Make clear design and color",
        image1: IMAGES[0],
        image2: IMAGES[1],
        image3: IMAGES[2],
        className: "before:bg-gray-700",
        progress: 2,
        claculatedWidth: 'before:w-2/12',
        comments: 7,
        links: 3,
      },
      {
        id: 1,
        headTitle: "Userbility testing",
        body: "Make clear design and color",
        image1: IMAGES[0],
        image2: IMAGES[1],
        image3: IMAGES[2],
        className: "before:bg-gray-700",
        progress: 5,
        claculatedWidth: 'before:w-5/12',
        comments: 1,
        links: 8,
      },
    ],


    cardImage: [
      {
        id: 0,
        image: imagePink,
        color: "bg-bgPink",
      }     
    ],
  },


  {
    id: 1,
    title: "Inprogress",
    number: "1",
    cardTitleProgress: [
      {
        id: 0,
        headTitle: "Highfidelity Design",
        body: "Make clear design and color",
        image1: IMAGES[0],
        image2: IMAGES[1],
        image3: IMAGES[2],
        className: "before:bg-secondaryOrange",
        progress: 3,
        claculatedWidth: 'before:w-3/12',
        comments: 6,
        links: 2,
      },
      
    ],


    cardImage: [
      {
        id: 0,
        image: imageButter,
        color: "bg-bgButter",
      }     
    ],
  },


  {
    id: 2,
    title: "Completed",
    number: "2",
    cardTitleProgress: [
      {
        id: 0,
        headTitle: "Highfidelity Design",
        body: "Make clear design and color",
        image1: IMAGES[0],
        image2: IMAGES[1],
        image3: IMAGES[2],
        className: "before:bg-secondaryGreenLight",
        progress: 5,
        claculatedWidth:'before:w-5/12',
        comments: 8,
        links: 5,
        // order: '-order-1',
      },
      {
        id: 1,
        headTitle: "Userbility testing",
        body: "Make clear design and color",
        image1: IMAGES[0],
        image2: IMAGES[1],
        image3: IMAGES[2],
        className: "before:bg-secondaryGreenLight",
        progress: 4,
        claculatedWidth: 'before:w-4/12',
        comments: 6,
        links: 1,
        order: '-order-2',
      },
      {
        id: 2,
        headTitle: "Userbility testing",
        body: "Make clear design and color",
        image1: IMAGES[0],
        image2: IMAGES[1],
        image3: IMAGES[2],
        className: "before:bg-secondaryGreenLight",
        progress: 4,
        claculatedWidth: 'before:w-4/12',
        comments: 6,
        links: 1,
      },
    ],


    cardImage: [
      {
        id: 0,
        image: imageGreen,
        color: "bg-bgGreen",
      },
      {
        id: 1,
        image: imageGreen,
        color: "bg-bgGreen",
        order: 'order-1',
      },
      
       
    ],
  },
];
