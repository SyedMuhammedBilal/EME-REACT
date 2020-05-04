import React, { Component } from 'react'
import Styles from './SecSection.module.css'


class SecSection extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             head: 'What types of machines do we have?  '
        }
    }

    render() {

        return(
            <div className={Styles.container}>
                <section className={Styles.sec}>
                    <div>
                        <div className={Styles.head}>
                            <h1 className={Styles.heading} >{this.state.head}</h1>
                            <p />
                            <p />
                        </div>
                        <div className={Styles.large}>
                            <p className={Styles.typography}>Biomedical engineering (BME) or medical engineering is the application of engineering principles and design concepts to medicine and biology for healthcare purposes (e.g. diagnostic or therapeutic). This field seeks to close the gap between engineering and medicine, combining the design and problem solving skills of engineering with medical biological sciences to advance health care treatment, including diagnosis, monitoring, and therapy.[1][2] Also included under the scope of a biomedical engineer is the management of current medical equipment within hospitals while adhering to relevant industry standards. </p>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default SecSection