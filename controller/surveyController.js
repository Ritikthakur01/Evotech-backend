import surveyDetails from "../model/surveyDetails.js"

const formSubmission = async (req, res) => {

    try {    
        const { name, gender, nationality, email, phoneNumber, address , message } = req.body

        const submitData = await surveyDetails.create({
            name, gender, nationality, email, phoneNumber, address , message
        })

        if(!submitData){
            return res.status(400).json({ message :'Error in submitting the data'})
        }

        // Sending a response back to the client with status code 201 and success message
        return res.status(201).json({ message : "Form Submitted Successfully", submitData : submitData})

    }
    catch (err) {
        console.log("Error", err)
        return res.status(500).json({ message: "server error" })
    }
}

const getAllData = async (req, res) => {

    try {
      
        const allData = await surveyDetails.find();

        if(!allData){
            return res.status(404).json('No Data Found');
        }

        return res.status(200).json({ data : allData , message: "Data fetched sucessfully" })

    }
    catch (err) {
        console.log("Error", err)
        return res.status(500).json({ message: "server error" })
    }
}

export {
    formSubmission,
    getAllData
}
