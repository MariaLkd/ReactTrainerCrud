import axios from "axios";

const TRAINERS_REST_API_URL = "http://localhost:8080/api/trainers";

class TrainerService{

    getTrainers(){
        axios.get(TRAINERS_REST_API_URL);
    }
}

export default new TrainerService();