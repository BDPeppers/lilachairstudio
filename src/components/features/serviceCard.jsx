import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const ServiceCard = (props) => {
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
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
export default ServiceCard;