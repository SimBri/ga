#ifndef COMMON_H
#define COMMON_H

#include <stdbool.h>
#include <stdint.h>
#include <zephyr/sys/printk.h>

#define FIRMWARE_VERSION "0.2.35"
//extern char name[];
extern char imsi[];
/**
 * @brief Returns the low byte of the 16-bit value \c n as an \c uint8_t.
 */
#define LOW_BYTE(n) ((uint8_t)((n)&0xFF))
