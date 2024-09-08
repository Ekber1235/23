
        function isValidNumber(phoneNumber) {
           
            let start = phoneNumber.startsWith('+7');
            let number = phoneNumber.slice(2);
            switch (true) {
                case start && number.length < 12:
                    return true;
                default:
                    return false;
            }
        }
        let main = prompt('Nömrəsini daxil edin:')
        console.log(isValidNumber(main));
