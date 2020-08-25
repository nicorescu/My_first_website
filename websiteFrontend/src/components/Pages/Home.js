import React,{Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/img/header-bg.jpg';

//Re-usable components
import Services from '../Common/Services';
import Portofolio from '../Common/Portofolio';
import Team from '../Common/Team';
import Clients from '../Common/Clients';


class Home extends Component {

    render()
    {
        return(
            <div>
                <Header 
                    title="Welcome To Our Studio!"
                    subtitle="IT'S NICE TO MEET YOU"
                    buttonText="TELL ME MORE"
                    showButton={true}
                    image={image}
                />
                <Services/>
                <Portofolio/>
                <Team />
                <Clients />
            </div>
        );
    }
}

export default Home;