import { registerBlockType } from '@wordpress/blocks';
import './style.scss'; // Imports the styles you created earlier
import Edit from './edit';
import save from './save';
import metadata from './block.json';

/**
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 */
registerBlockType(metadata.name, {
	edit: Edit,
	save,
});