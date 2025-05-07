function formatString(input: string, toUpper: boolean = true): string{
    if(toUpper === true){
        return input.toUpperCase()
    }
    else{
        return input.toLowerCase()
    }
}
