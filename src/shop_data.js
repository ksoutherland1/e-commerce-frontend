const SHOP_DATA = [
    {
      title: 'Memorable Moments',
      items: [
        {
        id: 1,
        name: "The Woman of Samaria",
        imageUrl: "https://images.unsplash.com/photo-1584285375354-5426026af8f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1735&q=80",
        price: 220
        },
        {
        id: 2,
        name: "A Martyr Of The 16th Century",
        imageUrl: "https://images.unsplash.com/photo-1584285404748-5c82dd7fe9c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1732&q=80",
        price: 150
        },
        {
        id: 3,
        name: "Coastal Scene with the Embarkation of Saint Paul",
        imageUrl: "https://images.unsplash.com/photo-1584285418504-010afe0e2676?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1716&q=80",
        price: 210
        },
        {
        id: 4,
        name: "Dives and Lazarus",
        imageUrl: "https://images.unsplash.com/photo-1584285418304-9d8d8a049114?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2173&q=80",
        price: 130
        },
        {
        id: 5,
        name: "The Village Philharmonic",
        imageUrl: "https://images.unsplash.com/photo-1584285374947-6bfa952d3de2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1660&q=80",
        price: 140
        },
        {
        id: 6,
        name: "Parsons, Bransby, And Watkyns In A Scene From Lethe",
        imageUrl: "https://images.unsplash.com/photo-1584285393855-c555d1a4df01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1620&q=80",
        price: 160
        },
      ],
    },
    {
      title: 'Notible Locations',
      items: [
        {
          id: 7,
          name: 'The Arrival of the Earl of Manchester in Venice',
          imageUrl: 'https://images.unsplash.com/photo-1584285393978-13e3bf47080b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2882&q=80',
          price: 300,
        },
        {
          id: 8,
          name: "St Paul's from the River Thames",
          imageUrl: 'https://images.unsplash.com/photo-1584285405429-136bf988919c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80',
          price: 210,
        },
        {
          id: 9,
          name: 'Lake Albano And Castel Gandolfo',
          imageUrl: 'https://images.unsplash.com/photo-1584285405062-0f1257a85891?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1689&q=80',
          price: 170,
        },
        {
          id: 10,
          name: 'Distant View Of Birdingbury Hall',
          imageUrl: 'https://images.unsplash.com/photo-1584285418901-7e6981b6f5fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80',
          price: 160,
        },
        {
          id: 11,
          name: 'Southern Coast of Guernsey',
          imageUrl: 'https://images.unsplash.com/photo-1584285375230-3446f9176740?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2872&q=80',
          price: 170,
        },
        {
          id: 12,
          name: 'The River Severn at Shrewsbury',
          imageUrl: 'https://images.unsplash.com/photo-1578926375605-eaf7559b1458?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1663&q=80',
          price: 320,
        },
      ],
    },
    {
      title: 'Scenic Views',
      items: [
        {
          id: 13,
          name: 'La Vigne [The Vine]',
          imageUrl: 'https://images.unsplash.com/photo-1584285405213-f8a2de554adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1668&q=80',
          price: 100,
        },
        {
          id: 14,
          name: 'The Sheep Drive',
          imageUrl: 'https://images.unsplash.com/photo-1584285394311-4cc74b6e4023?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1727&q=80',
          price: 180,
        },
        {
          id: 15,
          name: 'Sweet Water Meadows Of The West',
          imageUrl: 'https://images.unsplash.com/photo-1584285418948-fa79344dafd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1727&q=80',
          price: 260,
        },
        {
          id: 16,
          name: 'Monte Civetta',
          imageUrl: 'https://images.unsplash.com/photo-1584278773680-8d940a213dcf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80',
          price: 300,
        },
        {
          id: 17,
          name: 'A Thunder Storm, 1817-18',
          imageUrl: 'https://images.unsplash.com/photo-1579541671172-43429ce17aca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2065&q=80',
          price: 370,
        },
        {
          id: 18,
          name: 'Near Sorrento, 1863',
          imageUrl: 'https://images.unsplash.com/photo-1578926078693-4eb3d4499e43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1708&q=80',
          price: 160,
        },
      ],
    },
    {
      title: 'Birmingham',
      items: [
        {
          id: 19,
          name: 'Congreve Street, Birmingham',
          imageUrl: 'https://images.unsplash.com/photo-1577083288073-40892c0860a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1661&q=80',
          price: 280,
        },
        {
          id: 20,
          name: 'Junction of Bread Street and Church Street, Birmingham',
          imageUrl: 'https://images.unsplash.com/photo-1577083287809-1c229a750bba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
          price: 170,
        },
        {
          id: 21,
          name: 'Dale End and Stafford Street, Birmingham',
          imageUrl: 'https://images.unsplash.com/photo-1577083300575-b42d4598b25b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2087&q=80',
          price: 160,
        },
        {
          id: 22,
          name: 'The Old Theatre Stores, New Street, Birmingham',
          imageUrl: 'https://images.unsplash.com/photo-1577083287736-570a5c9a0864?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1023&q=80',
          price: 120,
        },
        {
          id: 23,
          name: 'Original Digbeth Tripe House, Birmingham',
          imageUrl: 'https://images.unsplash.com/photo-1577083553180-732e5d4b2d39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=786&q=80',
          price: 270,
        },
        {
          id: 24,
          name: 'The Golden Lion pub, Deritend, Birmingham',
          imageUrl: 'https://images.unsplash.com/photo-1577083552895-72a5d8f9285d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1712&q=80',
          price: 110     
         },
        ],
      },
      {
        title: 'People',
        items: [
          {
            id: 25,
            name: 'Mule and Muleteer',
            imageUrl: 'https://images.unsplash.com/photo-1577720643144-20587a48755c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1727&q=80',
            price: 180,
          },
          {
            id: 26,
            name: 'Dawn, 1871',
            imageUrl: 'https://images.unsplash.com/photo-1576769781887-e4686a02d1db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1725&q=80',
            price: 400,
          },
          {
            id: 27,
            name: 'Vanished Hand, 1888',
            imageUrl: 'https://images.unsplash.com/photo-1576504473326-755e6cc0dc78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1722&q=80',
            price: 60,
          },
          {
            id: 28,
            name: 'Changing the Letter, 1908',
            imageUrl: 'https://images.unsplash.com/photo-1576769267415-9642010aa962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1586&q=80',
            price: 60,
          },
          {
            id: 29,
            name: 'Night with her Train of Stars',
            imageUrl: 'https://images.unsplash.com/photo-1577083552792-a0d461cb1dd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2170&q=80',
            price: 570,
          },
          {
            id: 30,
            name: 'A Birmingham Prize Fight, 1789 ',
            imageUrl: 'https://images.unsplash.com/photo-1580711508375-6040b32f28aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1701&q=80',
            price: 100  
          },
        ],
      },

      {
        title: 'Ancient Establishments',
        items: [
          {
            id: 31,
            name: 'Greenfield House, Harborne',
            imageUrl: 'https://images.unsplash.com/photo-1578926372062-6ddf6fc55e0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2112&q=80',
            price: 180,
          },
          {
            id: 32,
            name: 'Hagley Road Toll Gate Birmingham',
            imageUrl: 'https://images.unsplash.com/photo-1578927072306-be447c77ad29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1693&q=80',
            price: 200,
          },
          {
            id: 33,
            name: 'Pont Valentre, Cahors, France',
            imageUrl: 'https://images.unsplash.com/photo-1579541637431-4e3cd6f6c9e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1673&q=80',
            price: 460,
          },
          {
            id: 34,
            name: 'Searchlight at Dusk',
            imageUrl: 'https://images.unsplash.com/photo-1580711508485-a059a13d4567?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1638&q=80',
            price: 160,
          },
          {
            id: 35,
            name: 'Temple Of Pallas',
            imageUrl: 'https://images.unsplash.com/photo-1578301978577-5189c83839ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1019&q=80',
            price: 270,
          },
          {
            id: 36,
            name: 'Warwick Castle',
            imageUrl: 'https://images.unsplash.com/photo-1578301996401-164f1d315926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1688&q=80',
            price: 300     
           },
          ],
        },
    ];
  
    export default SHOP_DATA;
        