const data = [
    {
      'id': 1,
      'title': 'Air Jordan 1 Low',
      'description':'First Product',
      'price': '110',
      'pictureUrl': 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0475b5f1-43c2-4fce-bbb9-81d94e496ba3/air-jordan-1-low-se-shoes-l49h2M.png'
    },
    {
      'id': 2,
      'title': 'Nike Air Max 97',
      'description': 'Second Product',
      'price': '180',
      'pictureUrl': 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4b98af92-09db-426d-9659-8eaaf0db41e8/air-max-97-se-mens-shoes-VcSkNH.png'
    },
    {
      'id': 3,
      'title': 'Nike Air Max 95 Essential',
      'description': 'Third Product',
      'price': '170',
      'pictureUrl': 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e20484c2-2b66-4124-b692-ad132a4ef9a5/air-max-95-essential-mens-shoes-V8wCh2.png'
    },
    {
      'id': 4,
      'title': 'Nike React Element',
      'description': 'Fourth Product',
      'price': '130',
      'pictureUrl': 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/cwblyah42iinky00xmyg/react-element-55-mens-shoes-68CDfV.png'
    },
    {
      'id': 5,
      'title': 'Nike Air Max 95',
      'description': 'Fifth Product',
      'price': '170',
      'pictureUrl': 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/40cfb8ac-73fe-4542-a728-927b661c5e5d/air-max-95-mens-shoes-95JNSF.png'
    },
    {
      'id': 6,
      'title': 'Nike ZoomX Vaporfly',
      'description': 'Sexth Product',
      'price': '300',
      'pictureUrl': 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3673b76f-0cab-4d1c-bfde-a5d85d72efb2/zoomx-vaporfly-next-x-gyakusou-running-shoes-c0TglG.png'
    },
  ]

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
      reject('Algo fallo')
    }, 2000)
  })

export default getProducts