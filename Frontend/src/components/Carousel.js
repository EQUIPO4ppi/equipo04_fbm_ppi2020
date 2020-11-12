import React from 'react';
class Carousel extends React.Component{
    render() {
    return (
<div id="myCarousel" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class></li>
        <li data-target="#myCarousel" data-slide-to="1" class></li>
        <li data-target="#myCarousel" data-slide-to="2" class></li>
    </ol>    
<div class="carousel-inner">   
    <div class="carousel-item active">  
    <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
    <rect width="100%" height="100%" fill="#777"></rect>
    </svg>
    <div class="container">
    <div class="carousel-caption text-left">
    <h1>Example headline.</h1>
    <p>the game JAJAJAJAJA</p>
        </div>
        </div>
    </div>
    <div class="carousel-item">
    <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
    <rect width="100%" height="100%" fill="#777"></rect>   
    </svg> 
    <div class="container">
    <div class="carousel-caption">
    <h1>Another example headline.</h1>
    <p>respiracion automatica desactivada</p>
    </div>
        </div>     
    </div>
    <div class="carousel-item">
    <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
    <rect width="100%" height="100%" fill="#777"></rect>
    </svg>
    <div class="container">
    <div class="carousel-caption text-right">
    <h1>One more for good measure.</h1>
    <p>…</p>
    </div>
    </div>
    </div>
</div>
</div>
  )

}

}
export default Carousel;