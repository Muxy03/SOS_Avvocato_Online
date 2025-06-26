import { publish } from 'gh-pages';

publish(
	'build', // which directory to upload
	{
		branch: 'gh-pages', // to which branch (it will create it, if it doesn't exist)
		dotfiles: true // should it include `.file`, yes, because of `.nojekyll`
	},
	() => {
		console.log('Deploy Complete!');
	}
);