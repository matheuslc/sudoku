module.exports = {
   
    /*
     * Validates input value is a number and the value is between 1 and 9 
     */
    validateInputValue: function validateInputValue(inputValue) {
        //validate if is a number and range 1-9
        if (inputValue >= 1 && inputValue <= 9) {
            return true
        }

        return false;
    },
   
    /*
     * Validate if the input value is already in the same row in entire board
     */
    validateDuplicateValue: function validateDuplicateValue(rows, inputValue) {
        return rows.indexOf(inputValue) == -1
    }  
}

