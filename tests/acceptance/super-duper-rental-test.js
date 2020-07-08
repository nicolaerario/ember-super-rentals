import { module, test } from "qunit";
import { click, visit, currentURL } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";

module("Acceptance | super duper rental", function (hooks) {
  setupApplicationTest(hooks);

  // Tests for the root page
  test("visiting /", async function (assert) {
    await visit("/");

    assert.equal(currentURL(), "/");
    assert.dom("h2").hasText("Welcome to the SupaDupa Rentals!");

    assert.dom(".jumbo a.button").hasText("About Us");
    await click(".jumbo a.button");
    assert.equal(currentURL(), "/about");
  });

  // Test for the about page
  test("visiting /about", async function (assert) {
    await visit("/about");

    assert.equal(currentURL(), "/about");
    assert.dom("h2").hasText("About Supa Dupa Rentals");

    assert.dom(".jumbo a.button").hasText("Contact Us");
    await click(".jumbo a.button");
    assert.equal(currentURL(), "/getting-in-touch");
  });

  // Tests for contact page alias /getting-in-touch
  test("visiting /getting-in-touch", async function (assert) {
    await visit("/getting-in-touch");

    assert.equal(currentURL(), "/getting-in-touch");
    assert.dom("h2").hasText("Contact Us");

    assert.dom(".jumbo a.button").hasText("About Us");
    await click(".jumbo a.button");
    assert.equal(currentURL(), "/about");
  });
});
