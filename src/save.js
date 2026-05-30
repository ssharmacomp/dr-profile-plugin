import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { imageUrl, name, credentials, details, phone, email, aboutText, isExpandedByDefault } = attributes;
	const blockProps = useBlockProps.save({ className: 'dr-profile-card' });

	// Determine initial states based on the toggle setting
	const contentStyle = isExpandedByDefault ? { display: 'block' } : { display: 'none' };
	const buttonText = isExpandedByDefault ? 'Show Less' : 'Show More';
	const ariaExpanded = isExpandedByDefault ? 'true' : 'false';

	return (
		<div { ...blockProps }>
			<div className="profile-header">
				{imageUrl && (
					<div className="profile-image-wrap">
						<img src={imageUrl} alt={name} />
					</div>
				)}
				<div className="profile-info">
					<h2>{name}</h2>
					<p className="dr-credentials">{credentials}</p>
					<RichText.Content tagName="div" className="dr-details" value={details} />
					
					<div className="dr-contact">
						{phone && <p className="dr-phone"><i class="fa fa-phone-square" aria-hidden="true"></i> {phone}</p>}
						{email && <p className="dr-email"><i class="fa fa-envelope" aria-hidden="true"></i>{email}</p>}
					</div>
				</div>
			</div>
			<div className="profile-about-wrapper">
				<div className="dr-about-content" style={contentStyle}>
					<hr className="dashed-divider" />
					<h3>About {name}</h3>
					<RichText.Content tagName="div" value={aboutText} />
				</div>
				<div className="dr-toggle-wrap">
					<button className="dr-toggle-btn" aria-expanded={ariaExpanded}>{buttonText}</button>
				</div>
			</div>
		</div>
	);
}