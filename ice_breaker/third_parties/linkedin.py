import os
import requests


def scrap_linkedin_profile_origin(linkedin_profile_url: str):
    """scrap information from LinkedIn profiles,
    Manually scrape the information from the LinkedIn profile"""
    api_key = os.getenv("PROXYCURL_API_KEY")
    headers = {"Authorization": "Bearer " + api_key}
    api_endpoint = "https://nubela.co/proxycurl/api/v2/linkedin"
    response = requests.get(
        api_endpoint, params={"url": linkedin_profile_url}, headers=headers
    )

    return response


def scrap_linkedin_profile(api_endpoint: str):
    """scrap information from LinkedIn profiles,
    Manually scrape the information from the LinkedIn profile"""
    response = requests.get(api_endpoint)
    response = response.json()
    # preprocess for token limit (GPT)
    response = {
        k: v
        for k, v in response.items()
        if v not in ([], "", "", None)
        and k not in ["people_also_viewed", "certifications"]
    }

    if response.get("groups"):
        for group_dict in response.data("groups"):
            group_dict.pop("profile_pic_url")

    print(len(response))
    return response


if __name__ == "__main__":
    response = scrap_linkedin_profile(
        api_endpoint="https://gist.githubusercontent.com/ChaejinE/81673f47a86e6a0fb0c0a4aa604e0809/raw/9e8dce0912d20c47d94027eb8581d3f9b756c20c/gistfile1.txt"
    )
    print(response.json())
