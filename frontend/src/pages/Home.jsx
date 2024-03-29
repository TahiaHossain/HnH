import { Link } from 'react-router-dom';
const Banner = () => {
	return (
		<div className="header">
			<div className="banner">
				<div className="hero-text">
					<h1>Enjoy your tastes from H&H</h1>
					<p><b><i>Irresistible recipes and culinary inspiration await your discovery. Unleash your inner chef and savor the essence of extraordinary flavors.</i></b></p>
				</div>
				<Link className="get-started" to="/signup">
					Get Started
				</Link>
			</div>
		</div>
	);
};

function Search() {
	return (
		<section className="search">
			<div className="overlay"></div>
			<div className="content">
				<h1>Find any pill you want.</h1>
				<form action="">
					<input type="text" placeholder="Search for a pill" />
					<button type="submit">Search</button>
				</form>
			</div>
		</section>
	);
}

function Home() {
	return (
		<>
			<Banner />
		</>
	);
}

export default Home;
