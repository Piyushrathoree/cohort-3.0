const style = { width: 500, backgroundColor: "#7f8c8d", borderRadius: 10, borderColor: "gray", borderWidth: 1, padding: 20 , margin:20 , color:"#2c3e50"}

export function PostComponent({name, subtitle, time, image, description}) {
  return <div style={style}> 
    <div style={{display: "flex"}}>
      <img src={image} style={{
        width: 50,
        height: 50,
        borderRadius: 20
      }} />
      <div style={{fontSize: 10, marginLeft: 10}}>
        <b>
          {name}
        </b>
        <div>{subtitle}</div>
        {(time !== undefined) ? <div style={{display: 'flex'}}>
          <div>{time}</div>      
          <img src={image} style={{width: 12, height: 12}} />
        </div> : null}
      </div>
    </div>
    <div style={{fontSize: 12}}>
     {description}
    </div>
 </div>
}