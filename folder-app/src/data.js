export const content = [
  {
    id: "1",
    title: "root",
    type:"folder",
    subItems: [
      {
        id: "2",
        title: "Klasör 1",
        type:"folder",
        subItems: [
          {
            id: "5",
            title: "Alt Klasör 1",
            type:"folder",
          },
          {
            id: "6",
            type:"image",
            image: "https://picsum.photos/id/237/200/300",
            title: "Image 1",
          },
          {
            id: "7",
            type:"image",
            image:"https://picsum.photos/id/137/200/300",
            title: "Image 2 ",
          },
        ],
      },
      {
        id: "3",
        title: "Klasör 2",
        type:"folder",
        subItems: [
          {
            id: "10",
            image:"https://picsum.photos/id/7/200/300",
            type:"image",
            title: "Image Id 10",
          },
        ],
      },
      {
        id: "4",
        title: "Klasör 3",
        type:"folder",
      },

      {
        id: "8",
        type:"image",
        image:"https://picsum.photos/id/157/200/300",
        title: "Root Image 1",
      },
      {
        id: "9",
        type:"image", 
        image:"https://picsum.photos/id/100/200/300",
        title: "Root Image 2 ",
      },
    ],
  },
];
