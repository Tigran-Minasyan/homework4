const triangleStars = function(height){

    if(typeof height === 'number'){

        if(height>0){

            const rowStars = function(starCount){

                if(starCount <= 0){
                    return '';
                }

                const row = '*' + rowStars(starCount -1);
                return row;
            }

            const columnSpace = function(columnCount){

                if(columnCount >= height){
                    return '';
                }

                const a = ' ' + columnSpace(columnCount+1);
                return a;
            }

            const draw = function(columnCount,height){

                const a = columnSpace(columnCount) + rowStars(height+height-1);
                return a;
            }

            const loop = function(height){

                if(height <=0){
                    return '';
                }

                console.log(draw(height,height));
                return loop(height-1);
            }

            const result = loop(height,height);
            return result;
        }
        return 'print a higher number';
    }
    return 'print a number';
}

const checkerboard = function(n){

    if(n>=1){
        const loop = function(n,num){
            if(num>n){
                return '';
            }

            if(num%2 === 1){
                const row1 = function(n){

                    if(n<=0){
                        return '';
                    }

                    const result = '* ' + row1(n-1);
                    return result;
                }
                console.log(row1(n));
            }

            if(num%2 === 0){
                const row2 = function(n){

                    if(n<=0){
                        return '';
                    }

                    const result = ' *' + row2(n-1);
                    return result;
                }
                console.log(row2(n))
            }

            return loop(n,num+1)
        }
        return loop(n,1);
    }

    return 'print a higher number';
}

const pow = function(base, power){

    if(base>=1 && power>=1){

        const func = function(base, power){

            if(power<=0){
                return 1;
            }

            const sum = base * func(base, power-1);
            return sum;
        }
        return func(base, power);
    }
    
    return 'too small numbers';
}

const reverse = function(str){

    if(typeof str === 'string'){

        const amount = str.length-1;
        const rev = function(str,amount){

            if(amount<0){
                return '';
            }

            const result = str[amount] + rev(str,amount-1)
            return result;
            }
        return rev(str,amount);
    }
    return 'Please write text';
}