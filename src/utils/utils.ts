
// [String -> Binary]
export function convertStringToBinary(input: string): string {
        let result: string = '';
        for (let i = 0; i < input.length; i++) {
                const charCodeAt = input.charCodeAt(i).toString(2).padStart(8, '0');
                if (charCodeAt == '00001010') {
                        result += '\n';
                        continue;
                }
                result += charCodeAt + ' ';
        }

        return result;
}

// [String -> Hexadecimal]
export function convertStringToHexadecimal(input: string): string {
        let result: string = '';
        for (let i = 0; i < input.length; i++) {
                const charCodeAt = input.charCodeAt(i).toString(16).padStart(2, '0');
                if (charCodeAt == '0a') {
                        result += '\n';
                        continue;
                }
                result += charCodeAt + ' ';
        }
        
        return result;
}

// [String -> Decimal]
export function convertStringToDecimal(input: string): string {
        let result: string = '';
        for (let i = 0; i < input.length; i++) {
                const charCodeAt = input.charCodeAt(i).toString(10).padStart(3, '0');
                if (charCodeAt == '010') {
                        result += '\n';
                        continue;
                }
                result += charCodeAt + ' ';
        }

        return result;
}