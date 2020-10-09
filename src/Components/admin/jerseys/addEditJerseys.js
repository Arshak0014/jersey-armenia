import React, {Component} from 'react';
import AdminLayout from "../../../Hoc/adminLayout";

import FormField from "../../ui/formField";
import {validate} from "../../ui/misc";

import FileUploader from "../../ui/fileUploader";
import {firebaseJerseys, firebaseDB, firebase} from "../../../firebase";

class AddEditJerseys extends Component {

    state = {
        jerseyId: '',
        formType: '',
        formError: false,
        formSuccess: '',
        defaultImage: '',
        formdata: {
            title: {
                element: 'input',
                value: '',
                config: {
                    label: 'Jersey title',
                    name: 'title_input',
                    type: 'text'
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: '',
                showlabel: true
            },
            description: {
                element: 'input',
                value: '',
                config: {
                    label: 'Jersey description',
                    name: 'description_input',
                    type: 'text'
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: '',
                showlabel: true
            },
            price: {
                element: 'input',
                value: '',
                config: {
                    label: 'Jersey price',
                    name: 'price_input',
                    type: 'text'
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: '',
                showlabel: true
            },
            discount: {
                element: 'input',
                value: '',
                config: {
                    label: 'Jersey discount',
                    name: 'discount_input',
                    type: 'text'
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: '',
                showlabel: true
            },
            image: {
                element: 'image',
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            gender: {
                element: 'select',
                value: '',
                config: {
                    label: 'Select a jersey gender',
                    name: 'select_gender',
                    type: 'select',
                    options: [
                        {key: "Male", value: "Male"},
                        {key: "Female", value: "Female"},
                        {key: "Unisex", value: "Unisex"}
                    ]
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: '',
                showlabel: true
            },
            ageLimit: {
                element: 'select',
                value: '',
                config: {
                    label: 'Select a jersey age limit',
                    name: 'select_ageLimit',
                    type: 'select',
                    options: [
                        {key: "Adult", value: "Adult"},
                        {key: "Kids", value: "Kids"}
                    ]
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: '',
                showlabel: true
            },
            brand: {
                element: 'select',
                value: '',
                config: {
                    label: 'Select a jersey brand',
                    name: 'select_brand',
                    type: 'select',
                    options: [
                        {key: "Adidas", value: "Adidas"},
                        {key: "Nike", value: "Nike"},
                        {key: "Puma", value: "Puma"},
                        {key: "Reebok", value: "Reebok"},
                        {key: "Macron", value: "Macron"},
                        {key: "New Balance", value: "New Balance"}
                    ]
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: '',
                showlabel: true
            },
            type: {
                element: 'select',
                value: '',
                config: {
                    label: 'Select a jersey type',
                    name: 'select_type',
                    type: 'select',
                    options: [
                        {key: "Jersey", value: "Jersey"},
                        {key: "Polo", value: "Polo"},
                        {key: "Sportswear", value: "Sportswear"},
                        {key: "Coats", value: "Coats"},
                        {key: "Boots", value: "Boots"},
                        {key: "SportShoes", value: "SportShoes"},
                    ]
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: '',
                showlabel: true
            },
            availability: {
                element: 'select',
                value: '',
                config: {
                    label: 'Select a jersey availability',
                    name: 'select_availability',
                    type: 'select',
                    options: [
                        {key: "Available", value: "Available"},
                        {key: "Order", value: "Order"}
                    ]
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: '',
                showlabel: true
            },
        }
    };

    updateFields = (jersey,jerseyId,formType,defaultImage) => {
        const newFormdata = {...this.state.formdata};

        for (let key in newFormdata){
            newFormdata[key].value = jersey[key];
            newFormdata[key].valid = true;
        }

        this.setState({
            jerseyId,
            defaultImage,
            formType,
            formdata: newFormdata
        })
    };

    componentDidMount() {
        const jerseyId = this.props.match.params.id;
        if(!jerseyId) {
            this.setState({
                formType: 'Add Jersey'
            })
        }else{
            firebaseDB.ref(`jerseys/${jerseyId}`).once('value')
                .then((snapshot) => {
                    const jerseyData = snapshot.val();

                    firebase.storage().ref('jerseys')
                        .child(jerseyData.image).getDownloadURL().then((url) => {
                            this.updateFields(jerseyData,jerseyId,'Edit Jersey',url)
                    }).catch((e) => {
                        this.updateFields({
                            ...jerseyData,
                            image: ''
                        },jerseyId,'Edit Jersey',"")
                    })
                })
        }
    }

    updateForm(element,content = '') {

        const newFormData = {...this.state.formdata};
        const newElement = {...newFormData[element.id]};

        if (content === ''){
            newElement.value = element.event.target.value;
        }else{
            newElement.value = content
        }

        let validData = validate(newElement);
        newElement.valid = validData[0];
        newElement.validationMessage = validData[1];

        newFormData[element.id] = newElement;

        this.setState({
            formError: false,
            formdata: newFormData
        })

    }

    successForm = (message) => {
        this.setState({
            formSuccess: message
        });
        setTimeout(() => {
            this.setState({
                formSuccess: ''
            });
        },2000)

    };

    submitForm(event) {
        event.preventDefault();

        let dataToSubmit = {};
        let formIsValid = true;

        for (let key in this.state.formdata) {
            dataToSubmit[key] = this.state.formdata[key].value;
            formIsValid = this.state.formdata[key].valid && formIsValid;
        }
        if (formIsValid){
            if (this.state.formType === "Edit Jersey"){
                firebaseDB.ref(`jerseys/${this.state.jerseyId}`)
                    .update(dataToSubmit).then(() => {
                        this.successForm("Update correctly")
                }).catch((e) => {
                    this.setState({formError: true})
                })
            }else{
                firebaseJerseys.push(dataToSubmit).then(() => {
                    this.props.history.push('/admin_jerseys')
                }).catch((e) => {
                    this.setState({
                        formError: true
                    })
                })
            }
        }else{
            this.setState({
                formError: true
            })
        }
    };

    resetImage = () => {
         const newFormdata = {...this.state.formdata};
         newFormdata["image"].value = '';
         newFormdata["image"].valid = false;
         this.setState({
             defaultImg: '',
             formData: newFormdata
         })
    };

    storeFilename = (filename) => {
        this.updateForm({id: 'image'},filename)
    };

    render() {
        return (
            <AdminLayout>
                <div className="editplayers_dialog_wrapper">
                    <h2>
                        {this.state.formType}
                    </h2>
                    <div>
                        <form onSubmit={(event) => this.submitForm(event)}>

                            <FileUploader
                                dir="jerseys"
                                tag={"Player image"}
                                defaultImage={this.state.defaultImage}
                                defaultImageName={this.state.formdata.image.value}
                                resetImage={() => this.resetImage()}
                                filename={(filename) => this.storeFilename(filename)}
                            />

                            <FormField
                                id={'title'}
                                formdata={this.state.formdata.title}
                                change={(element) => this.updateForm(element)}
                            />
                            <FormField
                                id={'brand'}
                                formdata={this.state.formdata.brand}
                                change={(element) => this.updateForm(element)}
                            />
                            <FormField
                                id={'description'}
                                formdata={this.state.formdata.description}
                                change={(element) => this.updateForm(element)}
                            />
                            <FormField
                                id={'price'}
                                formdata={this.state.formdata.price}
                                change={(element) => this.updateForm(element)}
                            />
                            <FormField
                                id={'discount'}
                                formdata={this.state.formdata.discount}
                                change={(element) => this.updateForm(element)}
                            />
                            <FormField
                                id={'gender'}
                                formdata={this.state.formdata.gender}
                                change={(element) => this.updateForm(element)}
                            />
                            <FormField
                                id={'ageLimit'}
                                formdata={this.state.formdata.ageLimit}
                                change={(element) => this.updateForm(element)}
                            />
                            <FormField
                                id={'type'}
                                formdata={this.state.formdata.type}
                                change={(element) => this.updateForm(element)}
                            />

                            <FormField
                                id={'availability'}
                                formdata={this.state.formdata.availability}
                                change={(element) => this.updateForm(element)}
                            />

                            <div className="success_label">{this.state.formSuccess}</div>
                            { this.state.formError ?
                                <div className="error_label">
                                    Something is wrong
                                </div>
                                : null
                            }

                            <div className="admin_submit">
                                <button style={{cursor: 'pointer'}} onClick={(event) => this.submitForm(event)}>
                                    {this.state.formType}
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
                
            </AdminLayout>
        );
    }
}

export default AddEditJerseys;