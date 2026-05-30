<?php
/**
 * Plugin Name: Dr. Profile Card Block
 * Description: A custom Gutenberg block to display a doctor's profile with a toggleable description.
 * Version: 1.0.0
 * Author: Tech Fusion
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

function register_dr_profile_block() {
    register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'register_dr_profile_block' );