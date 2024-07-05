interface MajorCredits{
    credits: number
    brand: any
}
interface MinorCredits{
    credits: number
    brand: any
}
function sumMajorCredits(subject1: MajorCredits["credits"], subject2: MajorCredits["credits"]){
    return subject1 + subject2;
}
function sumMinorCredits(subject1: MinorCredits["credits"], subject2: MinorCredits["credits"])
{
    return subject1 + subject2;
}
