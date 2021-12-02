const data = [
    {
      'id': 1,
      'title': 'Air Jordan 1 Low',
      'category': 'Jordan',
      'description':"Inspired by the original that debuted in 1985, the Air Jordan 1 Low offers a clean, classic look that's familiar yet always fresh. It's made for casual mode, with an iconic design that goes with everything and never goes out of style.",
      'price': '110',
      'pictureUrl': 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0475b5f1-43c2-4fce-bbb9-81d94e496ba3/air-jordan-1-low-se-shoes-l49h2M.png',
      'stock': 5
    },
    {
      'id': 2,
      'title': 'Nike Air Max 97',
      'category': 'Lifestyle',
      'description': "Made with at least 20% recycled content by weight, the Nike Air Max 97 SE takes a fresh step toward the future of footwear. The upper features 100% recycled canvas and accents of cork. The embroidered cork graphic on the tongue nods to the plant used in the shoe.",
      'price': '180',
      'pictureUrl': 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4b98af92-09db-426d-9659-8eaaf0db41e8/air-max-97-se-mens-shoes-VcSkNH.png',
      'stock': 10
    },
    {
      'id': 3,
      'title': 'Nike Air Max 95 Essential',
      'category': 'Lifestyle',
      'description': "Taking inspiration from the human body and running DNA, the Nike Air Max 95 Essential mixes unbelievable comfort with head turning style. The iconic side panels represent muscles while visible Nike Air in the heel and forefoot cushions your every step.",
      'price': '170',
      'pictureUrl': 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e20484c2-2b66-4124-b692-ad132a4ef9a5/air-max-95-essential-mens-shoes-V8wCh2.png',
      'stock': 15
    },
    {
      'id': 4,
      'title': 'Nike React Element',
      'category': 'Walking',
      'description': "The Nike React Element 55 Shoe borrows design lines from heritage runners like the Nike Internationalist and then places it all on Nike React technology.      ",
      'price': '130',
      'pictureUrl': 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/cwblyah42iinky00xmyg/react-element-55-mens-shoes-68CDfV.png',
      'stock': 8
    },
    {
      'id': 5,
      'title': 'Nike Air Max 95',
      'category': 'Lifestyle',
      'description': "Taking inspiration from the human body and '90s track aesthetics, the Nike Air Max 95 mixes unbelievable comfort with head-turning style. The iconic side panels represent strength and use a selection of colors. Visible Air in the heel and forefoot cushions every step.",
      'price': '170',
      'pictureUrl': 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/40cfb8ac-73fe-4542-a728-927b661c5e5d/air-max-95-mens-shoes-95JNSF.png',
      'stock': 2
    },
    {
      'id': 6,
      'title': 'Nike ZoomX Vaporfly',
      'category': 'Running',
      'description': "Maverick spirit. Jun Takahashi and his GIRA (Gyakusou International Running Association) return with another running staple. The Nike ZoomX Vaporfly Next% x Gyakusou clears your path to record-breaking speed with a light and fast feel. It's designed with more cushioning underfoot and reduced weight for energy return and comfort.",
      'price': '300',
      'pictureUrl': 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3673b76f-0cab-4d1c-bfde-a5d85d72efb2/zoomx-vaporfly-next-x-gyakusou-running-shoes-c0TglG.png',
      'stock': 5
    },
  ]

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
      reject('Algo fallo')
    }, 2000)
  })

export default getProducts
export {data}