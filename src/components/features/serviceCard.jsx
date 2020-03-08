import React from 'react';
//material
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//react router
import {Link} from 'react-router-dom';
//redux
import * as actions from '../../actions/serviceActions';
import {connect} from 'react-redux';

const ServiceCard = (props) => {
  const serviceInfo = {
    img: props.imgProp,
    price: props.priceProp,
    time: props.timeProp,
    name: props.serviceProp
  }
  
  //= [props.imgProp, props.serviceProp, props.timeProp, props.priceProp];
  
  console.log(serviceInfo);
  // console.log(props)
  return (
    <Card className='service-card'>
      <CardActionArea>
        <CardMedia 
          className='card-img lazyload'
          alt='Hair Service'
          src={props.imgProp}
          component='img'
          title={props.serviceProp}
        />
        <CardContent>
          <Typography className='card-content' gutterBottom variant="h5" component="h2">
            {props.serviceProp}
          </Typography>
          <Typography className='card-content' variant="body2" color="textSecondary" component="p">
            Time: {props.timeProp}
          </Typography>
          <Typography className='card-content' variant="body2" color="textSecondary" component="p">
            Price: {props.priceProp}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => props.sInfo(serviceInfo)} component={Link} to='/lilachairstudio/Services/Service'>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
const mapStateToProps = (state) =>{
  return{
    Info: state
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    // function
    sInfo: (info) => dispatch(actions.addSevice(info))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ServiceCard);