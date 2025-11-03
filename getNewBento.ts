const apiUrl = "https://opbento.edgexhq.tech/api/bento?n=Adina&g=adinahawaldar&x=%40adina_hawaldar&l=in%2Fadina-hawaldar-172060287&i=https%3A%2F%2Fgithub.com%2Fadinahawaldar%2Fadinahawaldar%2Fblob%2Fmain%2Fluffy.jpg&p=https%3A%2F%2Fadinatech.netlify.app%2F&z=348d2";
interface BentoResponse {
  url: string;
}

const fetchBentoUrl = async (apiUrl: string): Promise<string> => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: BentoResponse = (await response.json()) as BentoResponse;
    return data.url;
  } catch (error) {
    console.error("Error fetching Bento URL:", error);
    throw error;
  }
};

// @ts-ignore
fetchBentoUrl(apiUrl);
