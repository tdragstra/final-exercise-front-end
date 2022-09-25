export const selectSpaces = (reduxState) => reduxState.space.spaces;
export const selectStories = (reduxState) => reduxState.space.spacesDetail;

// export const orderListByDate = (reduxState) => {reduxState.space.spaces
// 		return state.sort((a, b) => {
// 			return moment.utc(b.startDate).diff(a.startDate);
// 		});
// 	},
// 	// the final parameter in the createSelector
// 	// function must be a function that accepts as arguments
// 	// all returned results from the previous functions
// 	(result) => result
// );
