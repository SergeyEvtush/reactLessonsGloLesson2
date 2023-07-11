
const slidesArray = [
	{
		sliderImage:{backgroundImage: 'url("./images/1.svg")'},
		sliderContent:"Первое целевое преимущество"
	},
	{
		sliderImage:{backgroundImage: 'url("./images/2.svg")'},
		sliderContent:"Второе целевое преимущество"
	},
	{
		sliderImage:{backgroundImage: 'url("./images/3.svg")'},
		sliderContent:"Третье целевое преимущество"
	},
	{
		sliderImage:{backgroundImage: 'url("./images/4.svg")'},
		sliderContent:"Четвертое целевое преимущество"
	},
];
const sliderArrows = [
	{
		classArrow: "features-slider-arrow features-slider-next",
		arrowContent:<svg width="9"
		height="16" xmlns="http://www.w3.org/2000/svg">
	<path
			d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z">
	</path>
</svg>
	},
	{
		classArrow: "features-slider-arrow features-slider-prev",
		arrowContent:<svg width="9" height="16"
		xmlns="http://www.w3.org/2000/svg">
	<path
			d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z">
	</path>
</svg>
	}
];
const formInputsData = [
	{
		inputType: "text",
		inputPlaceholder: "Ваше имя",
	},
	{
		inputType: "tel",
		inputPlaceholder: "Телефон",
	},
	{
		inputType: "email",
		inputPlaceholder: "E-mail",
	},
	
]

class Link extends React.Component{
	constructor(props) {
		super(props);
		this.href = "#";
		this.content = '';
		this.classLinkName = '';
	 }
	render() { 
		return <a href={this.props.href} className={this.props.classLinkName}>
			{ this.props.content}
		</a>;
	}
};
class Div extends React.Component { 
	constructor(props) {
		super(props);
		this.content;
		this.classDivName = '';
		this.divStyle=''
	 }
	render() { 
		return <div className={this.props.classDivName} style={this.props.divStyle}>
			{this.props.content}
		</div>;
	}
}
class Button extends React.Component { 
	constructor(props) {
		super(props);
		this.content;
		this.classButtonName = '';
	 }
	render() { 
		return <button className={this.props.classButtonName}>
			{this.props.content}
		</button>;
	}
}
class H2 extends React.Component { 
	constructor(props) {
		super(props);
		this.content;
		this.classH2Name = '';
	 }
	render() { 
		return <h2 className={this.props.classH2Name}>
			{this.props.content}
		</h2>;
	}
}
class Input extends React.Component { 
	constructor(props) { 
		super(props)
		this.data = {};
	}
	render() { 
		return <input type={this.props.data.inputType} placeholder={this.props.data.inputPlaceholder} />
	}
}
class Form extends React.Component { 
	constructor(props) { 
		super(props)
		this.formClass = ''
		this.formAction=''
	}
	render() { 
		<form className={this.props.formClass} action={this.props.formAction}>
			<Input data={formInputsData[0]}/>
			<Input data={formInputsData[1]}/>
			<Input data={formInputsData[2]}/>
			<Button classButtonName="btn contact-btn" content={<span>Позвоните мне</span>}/>
		</form>
	}
}
class Header extends React.Component{ 
	render() {
		return <div className="header">
		<Link content={<Div classDivName="header-logo"/>} />
		<Link href="tel:888" />
		<Div classDivName="header-phonelink" content={<Link href="tel:7(962)556-1234" content="+7(962)556-1234"/> } />
	</div>}
}
class Main extends React.Component { 
	render() { 
		return <div className="main">
			<h1 class="main-head">Заголовок c уникальным торговым предложение по системе 4U</h1>
			<Div classDivName="main-small" content="Описания предлжения компании. Сайт рыбатекст поможет дизайнеру, верстальщику,
				                        вебмастеру сгенерировать несколько абзацев более."/>
			<Button classButtonName="btn main-btn" content={<span>Подробнее</span>}/>
</div>
	}
}
class Features extends React.Component { 
	render() { 
		return <div className="features-wrapper">
			<H2 classH2Name="features-head" content="Уникальный заголовок для преимущества компании"/>
			<Div classDivName="features-subhead" content="О нас" />
			<Div classDivName="features-description"
				content="Описания предлжения компании. Сайт рыбатекст поможет дизайнеру, верстальщику,
				                        вебмастеру сгенерировать несколько абзацев более."/>
			<div classDivName="features-slider">
				<div class="features-slider_items">
					<Slide data={slidesArray[0]} />
					<Slide data={slidesArray[1]} />
					<Slide data={slidesArray[2]} />
					<Slide data={slidesArray[3]} />
				</div>
				<Arrow data={sliderArrows[0]} />
				<Arrow data={sliderArrows[1]} />
			</div>
		</div>
	}
}
class Contacts extends React.Component { 
	render() { 
		return <div className="contact-wrapper">
		<H2 classH2Name="contact-title" content="Остались вопросы?"/>
		<Div classDivName="contact-description" content="Оставьте номер телефона, и мы перезвоним вам" />
		<div className="contact-personal">
			Я даю своё <Link content=' согласие ' href='#'/>на обработку моих персональных данных.
			
			 
			</div>
	</div>
		
	}
}
class Footer extends React.Component { 
	render() {
		return <div className="footer">
	<Div classDivName="footer-logo"/>
			<Div classDivName="footer-company" content={<span>© 2020 XXXcompany. Все права защищены.</span>} />
			<Link href="tel:888" className="footer-phone"/>
			<div className="footer-websurfer">
				<span className="footer-websurfer_build">Сделано</span>
				<Link href="#" content="Ваше имя"/> 
			</div>  
			<Div classDivName="footer-phonelink" content={<a href="tel:888">+7(962)556-1234</a> }/>
</div>
	 }
}

class Slide extends React.Component { 
	constructor(props) { 
		super(props)
		this.data = {};
	}
	render() { 
		console.log(this.props.data.sliderImage);
		
		return (<div class="features-slider_item">
		<div class="features-img" style={this.props.data.sliderImage}></div>
		<div class="features-feature">{this.props.data.sliderContent}</div>
	</div>)
	}
}
class Arrow extends React.Component { 
	constructor(props) { 
		super(props)
		this.data = {};
	}
	render() { 
		return (<Button classButtonName={this.props.data.classArrow} content={this.props.data.arrowContent}/>)
	}
}


const headerWraper = ReactDOM.createRoot(document.querySelector('header .wrapper'));
const mainWrapper = ReactDOM.createRoot(document.querySelector('main .wrapper'));
const featuresWrapper=ReactDOM.createRoot(document.querySelector('section.features .wrapper'));
const contactWrapper=ReactDOM.createRoot(document.querySelector('section.contact .wrapper'));
const footer=ReactDOM.createRoot(document.querySelector('footer'));

headerWraper.render(<Header/>)
mainWrapper.render(<Main/>)
featuresWrapper.render(<Features/>);
contactWrapper.render(<Contacts />);
footer.render(<Footer />);
