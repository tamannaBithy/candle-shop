import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';




const ImageGroup = () => {

    const itemData = [

        {
            img: 'https://i.ibb.co/bLHrN59/port-1-img-02.jpg',
            title: 'AROMAS',

        },
        {
            img: 'https://i.ibb.co/19DZ8f8/photo-1605651202774-7d573fd3f12d.jpg',
            title: 'CANDLES',

        },
        {
            img: 'https://i.ibb.co/cgskNCp/banner-1.jpg',
            title: 'DIFFUSERS',

        },
        {
            img: 'https://i.ibb.co/HgymSTH/banner-3.jpg',
            title: 'FRAGRANCES',

        }
    ];


    return (
        <Container className="ps-5 mt-5">
            <Row xs={1} md={2}>
                <Col>
                    <ImageList variant="masonry" cols={2} gap={8}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                <ImageListItemBar
                                    sx={{
                                        background:
                                            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                                            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                                    }}
                                    title={item.title}
                                    position="top"
                                    actionIcon={
                                        <IconButton
                                            sx={{ color: 'white' }}
                                            aria-label={`favorite ${item.title}`}
                                        >
                                            <FavoriteBorderIcon />
                                        </IconButton>
                                    }
                                    actionPosition="left"
                                />

                            </ImageListItem>
                        ))}
                    </ImageList>

                </Col>


                <Col >

                    <h5 className="font-monospace  text-muted">Candles & Diffusers</h5>
                    <h3 className="py-5 letter-spacing fw-bold text-uppercase" >TRADITION OF QUALITY</h3>

                    <p className="text-muted fst-italic lh-lg">These are glass or metal tubes with an internal stricture partway along, which sit around the top of a lit candle. As the candle burns, the wax melts and the follower holds the melted wax in, whilst the stricture rests on the topmost solid portion of wax. Candle followers are often deliberately heavy or weighted to ensure they move down as the candle burns lower, maintaining a seal and preventing wax escape. The purpose of a candle follower is threefold:</p>


                    <div className="d-flex justify-content-start gap-3 mt-5 ps-2">
                        <div><i class="fas fa-info-circle text-muted"></i></div>
                        <p className="text-muted fst-italic">To contain the melted wax, making the candle more efficient, avoiding mess, and producing a more even burn.</p>
                    </div>
                    <div className="d-flex justify-content-start gap-3 mt-3 ps-2">
                        <div><i class="fas fa-info-circle text-muted"></i></div>
                        <p className="text-muted fst-italic">As a decoration, either due to the ornate nature of the device, or (in the case of a glass follower) through light dispersion or colouration.</p>
                    </div>
                    <div className="d-flex justify-content-start gap-3 mt-3 ps-2">
                        <div><i class="fas fa-info-circle text-muted"></i></div>
                        <p className="text-muted fst-italic">If necessary, to shield the flame from wind.</p>
                    </div>

                </Col>
            </Row>
        </Container>
    );
};

export default ImageGroup;