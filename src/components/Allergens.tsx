// This component is used to display the allergens of a product
export async function HasAllergens(idProduct: string) {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/Allergenic/GetAllergenic/52/${idProduct}`);
        const result = await response.json();
        // Get the allergens name from the response and return them
        const allergens = Object.values(result).flat().map((allergen: any) => allergen.name as string);
        return allergens;
    } catch (error) {
        console.log(error);
    }
}