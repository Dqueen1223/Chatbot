import HttpHelper from '../../utils/HttpHelper';
import Constants from '../../utils/constants';

/**
 *
 * @name fetchEncounterById
 * @description Utilizes HttpHelper to make a get request to an API
 * @param {*} setEncounters sets state for encounters
 * @param {*} setApiError sets error if response other than 200 is returned
 * @returns sets state for encounters if 200 response, else sets state for apiError
 */
export default async function fetchEncounterById(
  setEncounters,
  Id,
  setApiError,
  setNotFoundError
) {
  await HttpHelper(`${Constants.ENCOUNTERS_ENDPOINT}/${Id}`, 'GET')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      if (response.status === 404) {
        setNotFoundError(true);
        throw new Error(response.statusText);
      } else if (response.status !== 200) {
        setApiError(true);
      }
      throw new Error(response.statusText);
    }).then(setEncounters);
}
