/* eslint-disable no-undef */
const axios = require('axios');

let nationalParkList = [];
let visitedNationalParkList = [];

module.exports = {
    //this method will send visited NPs to the client-side
    getNationalParkList: async (req, res) => {
        await axios.get('https://developer.nps.gov/api/v1/parks?api_key=TRMF9bef3z4Omw3om2VgoIeqXqLaAzy5fiJhUV1B').then(res => {
            nationalParkList = res.data.data;
        })
        console.log(nationalParkList);
        res.status(200).send(nationalParkList)
    },
    // add NP to list of visited parks
    addNationalPark: (req, res) => {
        const { park } = req.body;

       
        visitedNationalParkList.push(req.body);

        res.status(200).send(visitedNationalParkList);
    },
    removeNationalPark: (req, res) => {
        const { id } = req.params;
        
        const index = visitedNationalParkList.findIndex(element => {
            return element.id == id 
        }
        );
        visitedNationalParkList.splice(index, 1);
        console.log(visitedNationalParkList)
        res.status(200).send(visitedNationalParkList); 
    }
}