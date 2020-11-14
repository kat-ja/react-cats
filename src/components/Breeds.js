import React from 'react';
import catapi from '../apis/catapi';

class Breeds extends React.Component {
    state = { breeds: [], selectedBreed: '', selectedBreedId: '', breedsArray: [] }

    getBreeds = async () => {
        const responseBreeds = await catapi.get('/breeds', {
            params: {

            }
        })
        this.setState({ breeds: responseBreeds });

    }

    getBreedsArray = () => {

        const arr = this.state.breeds.data;
        //console.log(arr);
        return arr;
        //
    }

    componentDidMount() {
        this.getBreeds();
        //this.setState({ selectedBreedId: currentElementId });
        //console.log(this.state.breeds);  
    }

    onSelectChange = event => {
        this.setState({ selectedBreed: event.target.value })
        const name = event.target.value;
        console.log("NAME", name);
        const arr = this.getBreedsArray()
        //console.log(arr);

        const currentElement = arr.find(element => (element.name === name));

        const currentElementId = currentElement.id;
        console.log("currentElementId", currentElementId);
        this.setState({ selectedBreedId: currentElementId });
        //console.log(this.state.selectedBreedId);
        //console.log(this.state.selectedBreed);
    }

    onSelectSubmit = event => {
        event.preventDefault();

        //this.setState({selectedBreedId: currentElement.id})
        //this.setState({ selectedBreed: event.target.value })

        this.props.onSelectSubmit(this.state.selectedBreed);

        // this.setState({ selectedBreed: '' })
    }
    onSelectSubmitId = event => {
        event.preventDefault();

        //this.setState({selectedBreedId: currentElement.id})
        //this.setState({ selectedBreed: event.target.value })

        this.props.onSelectSubmitId(this.state.selectedBreedId);

        // this.setState({ selectedBreed: '' })
    }

    render() {

        this.getBreedsArray();

        console.log("selected breed id", this.state.selectedBreedId);

        let arr = [];

        let breedsData = this.state.breeds.data;
        // console.log(breedsData);

        for (let key in breedsData) {
            arr.push(breedsData[key].name);
        }
        /*
        To get the options for select. Api too slow to fetch them every time. How to get a new line after each option?
        <p>
            {arr.map((breedname, i) => {
                return `<option value="${breedname}" key="${i}">${breedname}</option>`
            })}
        </p>
            MALLI:
            value={valueA, valueB } onClick={this.toggleEditing.bind(this, valueA, valueB,...) }

            onSubmit={ (event) => this.handleSubmit(event, type, id) }
        */
        return (
            <div className="card-body">
                <h5 className="card-title">Breed information</h5>
                <form>

                    <select
                        className="custom-select"
                        onChange={this.onSelectChange}
                        value={this.state.selectedBreed}
                    >
                        <option value="">Select option</option>
                        <option value="Abyssinian" key="0">Abyssinian</option>
                        <option value="Aegean" key="1">Aegean</option>
                        <option value="American Bobtail" key="2">American Bobtail</option>
                        <option value="American Curl" key="3">American Curl</option>
                        <option value="American Shorthair" key="4">American Shorthair</option>
                        <option value="American Wirehair" key="5">American Wirehair</option>
                        <option value="Arabian Mau" key="6">Arabian Mau</option>
                        <option value="Australian Mist" key="7">Australian Mist</option>
                        <option value="Balinese" key="8">Balinese</option>
                        <option value="Bambino" key="9">Bambino</option>
                        <option value="Bengal" key="10">Bengal</option>
                        <option value="Birman" key="11">Birman</option>
                        <option value="Bombay" key="12">Bombay</option>
                        <option value="British Longhair" key="13">British Longhair</option>
                        <option value="British Shorthair" key="14">British Shorthair</option>
                        <option value="Burmese" key="15">Burmese</option>
                        <option value="Burmilla" key="16">Burmilla</option>
                        <option value="California Spangled" key="17">California Spangled</option>
                        <option value="Chantilly-Tiffany" key="18">Chantilly-Tiffany</option>
                        <option value="Chartreux" key="19">Chartreux</option>
                        <option value="Chausie" key="20">Chausie</option>
                        <option value="Cheetoh" key="21">Cheetoh</option>
                        <option value="Colorpoint Shorthair" key="22">Colorpoint Shorthair</option>
                        <option value="Cornish Rex" key="23">Cornish Rex</option>
                        <option value="Cymric" key="24">Cymric</option>
                        <option value="Cyprus" key="25">Cyprus</option>
                        <option value="Devon Rex" key="26">Devon Rex</option>
                        <option value="Donskoy" key="27">Donskoy</option>
                        <option value="Dragon Li" key="28">Dragon Li</option>
                        <option value="Egyptian Mau" key="29">Egyptian Mau</option>
                        <option value="European Burmese" key="30">European Burmese</option>
                        <option value="Exotic Shorthair" key="31">Exotic Shorthair</option>
                        <option value="Havana Brown" key="32">Havana Brown</option>
                        <option value="Himalayan" key="33">Himalayan</option>
                        <option value="Japanese Bobtail" key="34">Japanese Bobtail</option>
                        <option value="Javanese" key="35">Javanese</option>
                        <option value="Khao Manee" key="36">Khao Manee</option>
                        <option value="Korat" key="37">Korat</option>
                        <option value="Kurilian" key="38">Kurilian</option>
                        <option value="LaPerm" key="39">LaPerm</option>
                        <option value="Maine Coon" key="40">Maine Coon</option>
                        <option value="Malayan" key="41">Malayan</option>
                        <option value="Manx" key="42">Manx</option>
                        <option value="Munchkin" key="43">Munchkin</option>
                        <option value="Nebelung" key="44">Nebelung</option>
                        <option value="Norwegian Forest Cat" key="45">Norwegian Forest Cat</option>
                        <option value="Ocicat" key="46">Ocicat</option>
                        <option value="Oriental" key="47">Oriental</option>
                        <option value="Persian" key="48">Persian</option>
                        <option value="Pixie-bob" key="49">Pixie-bob</option>
                        <option value="Ragamuffin" key="50">Ragamuffin</option>
                        <option value="Ragdoll" key="51">Ragdoll</option>
                        <option value="Russian Blue" key="52">Russian Blue</option>
                        <option value="Savannah" key="53">Savannah</option>
                        <option value="Scottish Fold" key="54">Scottish Fold</option>
                        <option value="Selkirk Rex" key="55">Selkirk Rex</option>
                        <option value="Siamese" key="56">Siamese</option>
                        <option value="Siberian" key="57">Siberian</option>
                        <option value="Singapura" key="58">Singapura</option>
                        <option value="Snowshoe" key="59">Snowshoe</option>
                        <option value="Somali" key="60">Somali</option>
                        <option value="Sphynx" key="61">Sphynx</option>
                        <option value="Tonkinese" key="62">Tonkinese</option>
                        <option value="Toyger" key="63">Toyger</option>
                        <option value="Turkish Angora" key="64">Turkish Angora</option>
                        <option value="Turkish Van" key="65">Turkish Van</option>
                        <option value="York Chocolate" key="66">York Chocolate</option>
                    </select>
                    <button
                        className="btn btn-outline-secondary float-right btn-space"
                        onClick={event => {
                            this.onSelectSubmit(event, this.state.selectedBreed);
                            this.onSelectSubmitId(event, this.state.selectedBreedId)
                            }}>
                        Search
                    </button>
                    {/* 
                    <input type="submit" onClick={this.onSelectSubmit}/>
                    onClick={event => this.onSelectSubmit(event, this.state.selectedBreed, this.state.selectedBreedId)}>
                    */}
                </form>
            </div>
        )
    }
}





export default Breeds;