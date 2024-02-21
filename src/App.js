import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <div className="App">
      {/* nav bar */}
          <Navbar className="bg-body-tertiary shadow fixed-top">
      <Container>
        <Navbar.Brand href="#home">
          <h2 style={{color:'#7fff00'}}>Organic</h2>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className='me-3'>
            About
          </Navbar.Text>
          <Navbar.Text className='me-3'>
           Order
          </Navbar.Text>
          <Navbar.Text className='me-3'>
            Products
          </Navbar.Text>
          <Navbar.Text className='me-3'>
            Contact
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    {/* main img */}
    <div id='main'>
          <center style={{paddingTop:'10%',marginTop:"20px"}}>
             <div style={{width:"50%"}}>
                 <p id='main-head' style={{fontSize:'clamp(30px, 4vw, 100px)',color:'#ff4500'}}>100% ORGANIC</p>
                 <p style={{color:'#ff4500'}}>Lorem ipsum dolor sit amet consecte Lorem ipsum</p> 
                 <Button variant="outline-warning">Primary</Button>
             </div>
          </center>
    </div>

    {/* cards */}
    <section style={{backgroundColor:'#e4eae6'}}>
       <div className='container p-5'>
         <div className='row'>
           <div className='col-sm-12 col-md-4'>  <Card style={{ width: '23rem' }}>
        <Card.Img variant="top" height={250}  src="https://foodandnutrition.org/wp-content/uploads/Savor-Carrots.jpg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="success">Go somewhere</Button>
        </Card.Body>
      </Card></div>
           <div className='col-sm-12 col-md-4'>  <Card style={{ width: '23rem' }}>
        <Card.Img variant="top" height={250}  src="https://www.thespruceeats.com/thmb/RPOUMn6I_LGL6rLiujElqfZfZzE=/3865x2576/filters:fill(auto,1)/fresh-organic-beetroot-over-wooden-background-684252498-5aa04d238e1b6e0036dbd636.jpg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="success">Go somewhere</Button>
        </Card.Body>
      </Card></div>
           <div className='col-sm-12 col-md-4'>  <Card style={{ width: '23rem' }}>
        <Card.Img variant="top" height={250}  src="https://fthmb.tqn.com/Moy2pD11DMaWTm1viVpGo1JlYFo=/3276x2103/filters:fill(auto,1)/Eggplants-588cfce53df78caebccb73e7.jpg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="success">Go somewhere</Button>
        </Card.Body>
      </Card></div>
         </div>
  
  
         <div className='row mt-5'>
           <div className='col-sm-12 col-md-4'>  <Card style={{ width: '23rem'}}>
        <Card.Img variant="top" height={250} src="https://d3d0lqu00lnqvz.cloudfront.net/media/media/c31f12c7-e5bc-45ce-b768-a0efe8bc9b84.jpg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="success">Go somewhere</Button>
        </Card.Body>
      </Card></div>
           <div className='col-sm-12 col-md-4'>  <Card style={{ width: '23rem' }}>
        <Card.Img variant="top" height={250}  src="https://voices.shortpedia.com/wp-content/uploads/2021/07/lady-finger-1200x900-1.jpg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="success">Go somewhere</Button>
        </Card.Body>
      </Card></div>
           <div className='col-sm-12 col-md-4'>  <Card style={{ width: '23rem' }}>
        <Card.Img variant="top" height={250}  src="https://wallpapercave.com/wp/wp3705909.jpg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="success">Go somewhere</Button>
        </Card.Body>
      </Card></div>
         </div>
       </div>
    </section>
    {/* second image */}
     <section>
       <div id='second'>
          <center>
            <p id='main-head' style={{paddingTop:'7%',fontSize:'40px',color:'white'}}>FRESH & NON-GMO PRODUCTS</p>
          </center>  
          <center style={{color:'white'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita deserunt nulla inventore voluptatibus delectus </center>
       </div>
     </section>
     {/* second cards */}
     <section style={{backgroundColor:'#e4eae6'}}>
        <div className='container p-5'>
            <div className='row'>
                <div className='col-sm-12 col-md-4'>  <Card style={{ width: '23rem' }}>
      <Card.Body>
        <Card.Title><i style={{color:'#63E6BE'}} class="fa-solid fa-leaf fs-2"></i></Card.Title>
        
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content. <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, minus. Voluptatum reprehenderit doloremque expedita placeat ab. Quos, culpa?
        </Card.Text>
        
      </Card.Body>
    </Card></div>
                <div className='col-sm-12 col-md-4'>  <Card style={{ width: '23rem' }}>
      <Card.Body>
        <Card.Title><i style={{color:'#63E6BE'}} class="fa-brands fa-twitter fs-2"></i></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content. <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, minus. Voluptatum reprehenderit doloremque expedita placeat ab. Quos, culpa?
        </Card.Text>
        
      </Card.Body>
    </Card></div>
                <div className='col-sm-12 col-md-4'>  <Card style={{ width: '23rem' }}>
      <Card.Body>
        <Card.Title><i style={{color:'#63E6BE'}} class="fa-solid fa-leaf fs-2"></i></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content. <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, minus. Voluptatum reprehenderit doloremque expedita placeat ab. Quos, culpa?
        </Card.Text>
      
      </Card.Body>
    </Card></div>
            </div>
            <div className='row mt-5'>
                <div className='col-sm-12 col-md-4'>  <Card style={{ width: '23rem' }}>
      <Card.Body>
        <Card.Title><i style={{color:'#63E6BE'}} class="fa-brands fa-twitter fs-2"></i></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content. <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, minus. Voluptatum reprehenderit doloremque expedita placeat ab. Quos, culpa?
        </Card.Text>
     
      </Card.Body>
    </Card></div>
                <div className='col-sm-12 col-md-4'>  <Card style={{ width: '23rem' }}>
      <Card.Body>
        <Card.Title><i style={{color:'#63E6BE'}} class="fa-solid fa-leaf fs-2"></i></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content. <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, minus. Voluptatum reprehenderit doloremque expedita placeat ab. Quos, culpa?
        </Card.Text>
        
      </Card.Body>
    </Card></div>
                <div className='col-sm-12 col-md-4'>  <Card style={{ width: '23rem' }}>
      <Card.Body>
        <Card.Title><i style={{color:'#63E6BE'}} class="fa-brands fa-twitter fs-2"></i></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content. <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, minus. Voluptatum reprehenderit doloremque expedita placeat ab. Quos, culpa?
        </Card.Text>
       
      </Card.Body>
    </Card></div>
            </div>
        </div>

     </section>
     {/* footer */}
     <section id='footer'>
        <div className='container pt-5'>
           <div style={{color:'white'}} className='row'>
              <div className='col-sm-6 col-md-4'>
                <h3>Organic</h3>
                 <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat doloribus quis et dolor natus laborum sint praesentium soluta. Non cum reprehenderit corporis, consequuntur error ea doloremque maxime obcaecati iure distinctio!luta. Non cum reprehenderit corporis, luta. Non cum reprehenderit corporis, luta. Non cum reprehenderit</p>
              </div>
              <div className='col-sm-6 col-md-2'>
                <h3>About us</h3>
                <p>Fresh & Natural</p>
                <p>consequuntur error ea</p>
                <p>doloremque maxime obca</p>
                <p>dolor sit amet consectetur</p>
              </div>
              <div className='col-sm-6 col-md-2'>
                 <h3>Other Info</h3>
                <p>Lorem ipsum dolor sit</p>
                <p> consectetur adipisicing elit</p>
                <p>errorea doremque maxime</p>
                <p>errea doloremque maxime</p></div>
              <div className='col-sm-6 col-md-4'> 
              <h3>Lorem</h3>
                 <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat doloribus quis et dolor natus laborum sint praesentium soluta. </p>
                 <div className='d-flex'>
                 <input placeholder='search' className='rounded' type="search" /><div className='btn border'><i class="fa-solid fa-magnifying-glass"></i></div>
                 </div>
              </div>
           </div>
           <div style={{color:'white',marginTop:'120px'}} className='row'>
              <div className='col-md-6'>
                 <p className='text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora o.</p>
              </div>
              <div className='col-md-6 d-flex justify-content-end'>
                 <div className='me-3'>
                 <i style={{color:'#ffd43b'}} class="fa-brands fa-twitter fs-2"></i>
                 </div>
                 <div className='me-3'>
                 <i style={{color:'#ffd43b'}} class="fa-brands fa-youtube fs-2"></i>
                 </div>
                 <div className='me-3'>
                 <i style={{color:'#ffd43b'}} class="fa-brands fa-facebook fs-2"></i>
                 </div>
              </div>
           </div>
         
        </div>
     </section>
    </div>
  );
}

export default App;
