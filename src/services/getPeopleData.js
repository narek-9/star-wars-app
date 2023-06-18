import {
  GUIDE_IMG_EXTENSION,
  URL_IMAGE_PERSON,
  SWAPI_ROOT,
  SWAPI_PEOPLE,
  HTTPS,
} from "../constants/api";

const getId = (url, category) => {
  const id = url.replace(HTTPS + SWAPI_ROOT + category, "").replace(/\//g, "");
  return id;
};

export const getPeopleId = (url) => getId(url, SWAPI_PEOPLE);

export const getPeopleImage = (id) =>
  `${URL_IMAGE_PERSON}/${id + GUIDE_IMG_EXTENSION}`;
