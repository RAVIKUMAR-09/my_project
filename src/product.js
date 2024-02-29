import React from 'react' ;
import ThreeSixty from 'react-360-view';

const Product = () => {
    return(
        <div>
            <img src={require(`./Car-Images/car-${number}.png`).default} width='800' height='400' />
           
             <div class="v360-header text bf-dark">
                <span class="v360-header-tittle"> Autoplay Product Slider in React  </span>
                <span class="v360-header-description"></span>

             
            </div>
            
        </div>
    );
};

export default Product;
<script src="https://scaleflex.cloudimg.io/v7/plugins/js-cloudimage-360-view/latest/js-cloudimage-360-view.min.js?func=proxy"></script>