import image from '../../images/age_of_empires_467x181.jpeg';

function Home() {
  return (
    <div className="main-padding centered-pages" data-testid="home-page">
      <img src={image} alt="age-of-main-img" />
    </div>
  );
}

export default Home;
