import Carousel from 'react-bootstrap/Carousel';
import './Slider.css'

const  Slider = () => {
  return (
    <Carousel className='slide-container'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.bigc.co.th/media/bannerads/images/bn-campaign-mother-day-web-220809.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.bigc.co.th/media/bannerads/images/coupon-b2b-20220809-web.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="	https://static.bigc.co.th/media/bannerads/images/bn-hl-coupon-web-220811.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="	https://static.bigc.co.th/media/bannerads/images/mother-day-surprise-aug22-web.jpg"
          alt="Fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="	https://static.bigc.co.th/media/bannerads/images/bro11-bigc-aniversary-banner-web-1.jpg"
          alt="Fifth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="	https://static.bigc.co.th/media/bannerads/images/express-coupon-web-220804.jpg"
          alt="Sixth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.bigc.co.th/media/bannerads/images/bro11-new-customer-banner-web500.jpg"
          alt="Seventh slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="	https://static.bigc.co.th/media/bannerads/images/web-slide-shop-parcel-20220728re.jpg"
          alt="Eight slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.bigc.co.th/media/bannerads/images/webbanner-upgradeyour-kitchen-220811.jpg"
          alt="Ninth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.bigc.co.th/media/bannerads/images/webbanner-hol-220809.jpg"
          alt="Tenth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;

