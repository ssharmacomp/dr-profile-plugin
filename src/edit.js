import { useBlockProps, RichText, MediaUpload, MediaUploadCheck, InspectorControls } from '@wordpress/block-editor';
import { Button, TextControl, PanelBody, ToggleControl } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { imageUrl, name, credentials, details, phone, email, aboutText, isExpandedByDefault } = attributes;
	const blockProps = useBlockProps({ className: 'dr-profile-card-edit' });

	return (
		<>
			<InspectorControls>
				<PanelBody title="Profile Settings" initialOpen={ true }>
					<ToggleControl
						label="Expand 'About' section by default"
						checked={ isExpandedByDefault }
						onChange={ (val) => setAttributes({ isExpandedByDefault: val }) }
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				<div className="profile-header">
					<div className="profile-image-wrap">
						<MediaUploadCheck>
							<MediaUpload
								onSelect={(media) => setAttributes({ imageUrl: media.url, imageId: media.id })}
								allowedTypes={['image']}
								value={attributes.imageId}
								render={({ open }) => (
									<Button onClick={open} className={imageUrl ? 'image-button' : 'button button-large'}>
										{imageUrl ? <img src={imageUrl} alt="Profile" /> : 'Upload Profile Image'}
									</Button>
								)}
							/>
						</MediaUploadCheck>
					</div>
					<div className="profile-info">
						<TextControl
							label="Name"
							value={name}
							onChange={(val) => setAttributes({ name: val })}
							className="dr-name-input"
						/>
						<TextControl
							label="Credentials"
							value={credentials}
							onChange={(val) => setAttributes({ credentials: val })}
						/>
						<RichText
							tagName="div"
							placeholder="HOD Details / Registration info..."
							value={details}
							onChange={(val) => setAttributes({ details: val })}
							className="dr-details-input"
						/>
						<TextControl
							label="Phone"
							value={phone}
							onChange={(val) => setAttributes({ phone: val })}
						/>
						<TextControl
							label="Email"
							value={email}
							onChange={(val) => setAttributes({ email: val })}
						/>
					</div>
				</div>
				
				<hr className="dashed-divider" />
				
				<div className="profile-about">
					<h3>About {name}</h3>
					<RichText
						tagName="div"
						placeholder="Enter biography details here..."
						value={aboutText}
						onChange={(val) => setAttributes({ aboutText: val })}
						className="dr-about-input"
					/>
					{/* Note: We keep this visible in the editor so you can always edit the text easily, regardless of the toggle setting */}
				</div>
			</div>
		</>
	);
}