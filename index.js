const index = (type='console') => {
  switch(type){
    case 'alert':
      alert('Hello World')
    default:
      console.log('Hello World')

  }
}

export default index